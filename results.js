const resultsConfig = window.NAME_VOTE_CONFIG || { supabaseUrl: '', supabaseAnonKey: '' };
const refreshButton = document.querySelector('#results-refresh');
const ballotCount = document.querySelector('#ballot-count');
const selectionCount = document.querySelector('#selection-count');
const leaderName = document.querySelector('#leader-name');
const resultsStatus = document.querySelector('#results-status');
const resultsChart = document.querySelector('#results-chart');

function setResultsStatus(message, state = '') {
  resultsStatus.textContent = message;
  resultsStatus.classList.remove('is-error', 'is-success');
  if (state) resultsStatus.classList.add(state);
}

function requestHeaders() {
  return {
    apikey: resultsConfig.supabaseAnonKey,
    Authorization: `Bearer ${resultsConfig.supabaseAnonKey}`
  };
}

function renderRows(rows) {
  if (!rows.length) {
    resultsChart.innerHTML = '<p class="results-empty">暂时还没有投票。把评分页面分享给亲友后，结果会自动出现在这里。</p>';
    leaderName.textContent = '—';
    return;
  }
  const maxVotes = Math.max(...rows.map((row) => Number(row.votes)));
  leaderName.textContent = `区晋${rows[0].name}`;
  resultsChart.innerHTML = rows.map((row, index) => {
    const votes = Number(row.votes);
    const width = Math.max(5, Math.round((votes / maxVotes) * 100));
    return `<article class="result-bar-row${index === 0 ? ' is-leading' : ''}"><span class="result-rank">${index + 1}</span><strong class="result-name">区晋${row.name}</strong><span class="result-bar"><i style="width:${width}%"></i></span><b>${votes} 票</b></article>`;
  }).join('');
}

async function loadResults() {
  if (!resultsConfig.supabaseUrl || !resultsConfig.supabaseAnonKey) {
    setResultsStatus('结果服务尚未配置。', 'is-error');
    return;
  }
  refreshButton.disabled = true;
  setResultsStatus('正在读取最新结果……');
  const base = resultsConfig.supabaseUrl.replace(/\/$/, '');
  try {
    const [countResponse, summaryResponse] = await Promise.all([
      fetch(`${base}/rest/v1/name_vote_counts?select=name,votes&order=votes.desc,name.asc`, { headers: requestHeaders(), cache: 'no-store' }),
      fetch(`${base}/rest/v1/name_vote_summary?select=ballots,five_name_ballots,legacy_three_name_ballots`, { headers: requestHeaders(), cache: 'no-store' })
    ]);
    if (!countResponse.ok || !summaryResponse.ok) throw new Error('results request failed');
    const rows = await countResponse.json();
    const summary = (await summaryResponse.json())[0] || { ballots: 0 };
    ballotCount.textContent = Number(summary.ballots || 0);
    selectionCount.textContent = rows.reduce((total, row) => total + Number(row.votes), 0);
    renderRows(rows);
    setResultsStatus(`已更新：${new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit' }).format(new Date())}`, 'is-success');
  } catch {
    setResultsStatus('暂时无法读取结果，请稍后刷新。', 'is-error');
  } finally {
    refreshButton.disabled = false;
  }
}

refreshButton.addEventListener('click', loadResults);
loadResults();
