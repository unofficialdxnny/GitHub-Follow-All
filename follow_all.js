const access_token = 'YOUR_ACCESS_TOKEN_HERE';
const username = 'username';

async function followAll() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/following?access_token=${access_token}`);
    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const users = await response.json();
    for (const user of users) {
      console.log(`Following ${user.login}`);
      const followButton = document.querySelector(`[aria-label="Follow ${user.login}"]`);
      if (followButton) {
        followButton.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        console.log(`Could not find follow button for ${user.login}`);
      }
    }
    console.log('Finished following all users');
  } catch (error) {
    console.error(error);
  }
}

followAll();
