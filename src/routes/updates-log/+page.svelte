<script>
    import { onMount } from 'svelte';
  
    let commits = [];
  
    // Function to fetch commit history from GitHub API
    async function fetchCommits() {
      const response = await fetch('https://api.github.com/repos/l0ad1ng-0015/mpclima/commits');
      const data = await response.json();
      commits = data.map(commit => ({
        message: commit.commit.message,
        date: new Date(commit.commit.author.date).toLocaleString(),
      }));
    }
  
    // Fetch commit history when the component is mounted
    onMount(fetchCommits);
  </script>
  
  <style>
    .container {
      width: 90%;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  
    h1 {
      margin-bottom: 20px;
      font-size: 24px;
    }
  
    .info {
      margin-bottom: 20px;
      font-size: 16px;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
    }
  
    th, td {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      text-align: left;
      word-wrap: break-word;
    }
  
    th {
      background-color: #0070BB;
      font-weight: bold;
      color: #fff;
    }
  
    @media screen and (max-width: 600px) {
      th, td {
        display: block;
        width: 100%;
        text-align: right;
      }
  
      th {
        display: none;
      }
  
      td {
        padding-left: 50%;
        position: relative;
      }
  
      td::before {
        content: attr(data-label);
        position: absolute;
        left: 10px;
        width: calc(50% - 20px);
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
      }
    }
  </style>
  
  <div class="container">
    <h1>Update Log</h1>
    <p class="info">Below is a list of the latest commits to the repository.</p>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {#each commits as commit}
          <tr>
            <td data-label="Date">{commit.date}</td>
            <td data-label="Message">{commit.message}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  