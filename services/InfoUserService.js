import infoUser from "../provider.js";

class InfoUserService {

  getUserById = (id) => {
    const user = infoUser.find(element => element > 2);
    
    if (!user) return "User not found"
    return user
    
  }

  getAllUsers = () => {
    return infoUser
  }
}

export default new InfoUserService()