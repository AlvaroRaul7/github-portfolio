import axios from 'axios';

const getProfileInformation = async(data, token) => {

    try{
        const username = data.githubUsername;
        if (token) {
            const res = await axios.get(
              `https://api.github.com/users/${username}`,
              {
                headers: {
                  Authorization: `token ${token}`,
                },
              }
            );
            let profile = res.data;
            console.log("PROFILE", profile);
            
            
            
            return profile;
          } else {
            const res = await axios.get(
              `https://api.github.com/users/${username}`
            );
            let profile = res.data;
            console.log("PROFILE", profile);
            return profile;
          }
    }catch(err){
        console.log(err);

    }
}

export default getProfileInformation;