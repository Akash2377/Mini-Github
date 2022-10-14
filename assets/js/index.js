document
  .getElementById("ProfileSearch")
  .addEventListener("keypress", showDataUser);
async function showDataUser(e) {
  try {
    if (e.key === "Enter") {
      let userName = document.getElementById("ProfileSearch").value;
      let url = `https://api.github.com/users/${userName}`;
      let url2 = `https://api.github.com/users/${userName}/repos`;
      let res2 = await fetch(url2);
      let data2 = await res2.json();
      let res = await fetch(url);
      let data = await res.json();
      showDataScreen(data);
      showrepo(data2);
    }
  } catch (error) {
    console.log(error);
  }
}
function showDataScreen(data) {
  document.getElementById("profile_icon").src = data.avatar_url;
  document.getElementById("repositoryS").innerText = data.public_repos;
  document.getElementById("BodySectionProfile").innerHTML = "";
  console.log(data);
  let bodyData = `
        <div>
          <img
            src="${data.avatar_url}"
            alt=""
          />
          <h1>${data.name}</h1>
          <p>${data.login}</p>
          <button>Edit Profile</button>
          <div id="followerS">
            <img src="./assets/img/07icon.png" alt="" />
            <span>${data.followers}</span> followers. <span>${data.followers}</span> following
          </div>
        </div>
       <div id="contentGrid">   </div>
  `;
  let div = document.createElement("div");
  div.innerHTML = bodyData;
  document.getElementById("BodySectionProfile").append(div);
}
function showrepo(data) {
  document.getElementById("contentGrid").innerHTML = "";
  console.log(data);
  data.forEach((element) => {
    let dataRepo = `
          <div>
              <h1>${element.name}</h1>
              <p>${element.visibility}</p>
            </div>
            <h3>${element.language || "HTML"}</h3>
    `;
    let div = document.createElement("div");
    div.innerHTML = dataRepo;
    document.getElementById("contentGrid").append(div);
  });
}

// // {avatar_url: "https://avatars.githubusercontent.com/u/103267138?v=4"
// allow_forking: true
// archive_url: "https://api.github.com/repos/Akash2377/Akash2377/{archive_format}{/ref}"
// archived: false
// assignees_url: "https://api.github.com/repos/Akash2377/Akash2377/assignees{/user}"
// blobs_url: "https://api.github.com/repos/Akash2377/Akash2377/git/blobs{/sha}"
// branches_url: "https://api.github.com/repos/Akash2377/Akash2377/branches{/branch}"
// clone_url: "https://github.com/Akash2377/Akash2377.git"
// collaborators_url: "https://api.github.com/repos/Akash2377/Akash2377/collaborators{/collaborator}"
// comments_url: "https://api.github.com/repos/Akash2377/Akash2377/comments{/number}"
// commits_url: "https://api.github.com/repos/Akash2377/Akash2377/commits{/sha}"
// compare_url: "https://api.github.com/repos/Akash2377/Akash2377/compare/{base}...{head}"
// contents_url: "https://api.github.com/repos/Akash2377/Akash2377/contents/{+path}"
// contributors_url: "https://api.github.com/repos/Akash2377/Akash2377/contributors"
// created_at: "2022-07-25T05:17:17Z"
// default_branch: "main"
// deployments_url: "https://api.github.com/repos/Akash2377/Akash2377/deployments"
// description: null
// disabled: false
// downloads_url: "https://api.github.com/repos/Akash2377/Akash2377/downloads"
// events_url: "https://api.github.com/repos/Akash2377/Akash2377/events"
// fork: false
// forks: 0
// forks_count: 0
// forks_url: "https://api.github.com/repos/Akash2377/Akash2377/forks"
// full_name: "Akash2377/Akash2377"
// git_commits_url: "https://api.github.com/repos/Akash2377/Akash2377/git/commits{/sha}"
// git_refs_url: "https://api.github.com/repos/Akash2377/Akash2377/git/refs{/sha}"
// git_tags_url: "https://api.github.com/repos/Akash2377/Akash2377/git/tags{/sha}"
// git_url: "git://github.com/Akash2377/Akash2377.git"
// has_downloads: true
// has_issues: true
// has_pages: false
// has_projects: true
// has_wiki: true
// homepage: null
// hooks_url: "https://api.github.com/repos/Akash2377/Akash2377/hooks"
// html_url: "https://github.com/Akash2377/Akash2377"
// id: 517527172
// is_template: false
// issue_comment_url: "https://api.github.com/repos/Akash2377/Akash2377/issues/comments{/number}"
// issue_events_url: "https://api.github.com/repos/Akash2377/Akash2377/issues/events{/number}"
// issues_url: "https://api.github.com/repos/Akash2377/Akash2377/issues{/number}"
// keys_url: "https://api.github.com/repos/Akash2377/Akash2377/keys{/key_id}"
// labels_url: "https://api.github.com/repos/Akash2377/Akash2377/labels{/name}"
// language: null
// languages_url: "https://api.github.com/repos/Akash2377/Akash2377/languages"
// license: null
// merges_url: "https://api.github.com/repos/Akash2377/Akash2377/merges"
// milestones_url: "https://api.github.com/repos/Akash2377/Akash2377/milestones{/number}"
// mirror_url: null
// name: "Akash2377"
// node_id: "R_kgDOHtjWhA"
// notifications_url: "https://api.github.com/repos/Akash2377/Akash2377/notifications{?since,all,participating}"
// open_issues: 0
// open_issues_count: 0
// owner: {login: 'Akash2377', id: 103267138, node_id: 'U_kgDOBie7Qg', avatar_url: 'https://avatars.githubusercontent.com/u/103267138?v=4', gravatar_id: '', …}
// private: false
// pulls_url: "https://api.github.com/repos/Akash2377/Akash2377/pulls{/number}"
// pushed_at: "2022-07-25T18:30:26Z"
// releases_url: "https://api.github.com/repos/Akash2377/Akash2377/releases{/id}"
// size: 6
// ssh_url: "git@github.com:Akash2377/Akash2377.git"
// stargazers_count: 0
// stargazers_url: "https://api.github.com/repos/Akash2377/Akash2377/stargazers"
// statuses_url: "https://api.github.com/repos/Akash2377/Akash2377/statuses/{sha}"
// subscribers_url: "https://api.github.com/repos/Akash2377/Akash2377/subscribers"
// subscription_url: "https://api.github.com/repos/Akash2377/Akash2377/subscription"
// svn_url: "https://github.com/Akash2377/Akash2377"
// tags_url: "https://api.github.com/repos/Akash2377/Akash2377/tags"
// teams_url: "https://api.github.com/repos/Akash2377/Akash2377/teams"
// topics: []
// trees_url: "https://api.github.com/repos/Akash2377/Akash2377/git/trees{/sha}"
// updated_at: "2022-07-25T05:17:17Z"
// url: "https://api.github.com/repos/Akash2377/Akash2377"
// visibility: "public"
// watchers: 0
// watchers_count: 0
// web_commit_signoff_required: false
// bio: null
// blog: ""
// company: null
// created_at: "2022-04-08T14:30:26Z"
// email: null
// events_url: "https://api.github.com/users/Akash2377/events{/privacy}"
// followers: 5
// followers_url: "https://api.github.com/users/Akash2377/followers"
// following: 6
// following_url: "https://api.github.com/users/Akash2377/following{/other_user}"
// gists_url: "https://api.github.com/users/Akash2377/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/Akash2377"
// id: 103267138
// location: null
// login: "Akash2377"
// name: "Akash Surve"
// node_id: "U_kgDOBie7Qg"
// organizations_url: "https://api.github.com/users/Akash2377/orgs"
// public_gists: 0
// public_repos: 5
// received_events_url: "https://api.github.com/users/Akash2377/received_events"
// repos_url: "https://api.github.com/users/Akash2377/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/Akash2377/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/Akash2377/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2022-07-24T14:48:12Z"
// url: "https://api.github.com/users/Akash2377"}
