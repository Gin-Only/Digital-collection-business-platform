async function loginUser(userInfo) {
    try {
        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to login user');
        }
        return await response.json();
    } catch (error) {
        console.error('Error logging in user:', error);
        return { error: 'Failed to login user' };
    }
  }
  
  async function registerUser(userInfo) {
    try {
        const response = await fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return await response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        return { error: 'Failed to register user' };
    }
  }
  
  async function changePassword(userInfo) {
    try {
        const response = await fetch('/user/changePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to change password');
        }
        return await response.json();
    } catch (error) {
        console.error('Error changing password:', error);
        return { error: 'Failed to change password' };
    }
  }
  
  async function logoutUser(userInfo) {
    try {
        const response = await fetch('/user/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to logout user');
        }
        return await response.json();
    } catch (error) {
        console.error('Error logging out user:', error);
        return { error: 'Failed to logout user' };
    }
  }
  
  async function getUserInfo(userInfo) {
    try {
        const response = await fetch('/user/userInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to get user info');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting user info:', error);
        return { error: 'Failed to get user info' };
    }
  }
  
  async function getUserCollectionNovel(userInfo) {
    try {
        const response = await fetch('/user/collectionNovel', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to get user collection novel');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting user collection novel:', error);
        return { error: 'Failed to get user collection novel' };
    }
  }
  
  async function getUserCollectionPainting(userInfo) {
    try {
        const response = await fetch('/user/collectionPainting', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to get user collection painting');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting user collection painting:', error);
        return { error: 'Failed to get user collection painting' };
    }
  }
  
  async function getUserInterestNovelList(userInfo) {
    try {
        const response = await fetch('/user/interestNovelList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to get user interest novel list');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting user interest novel list:', error);
        return { error: 'Failed to get user interest novel list' };
    }
  }
  
  async function getUserInterestPaintingList(userInfo) {
    try {
        const response = await fetch('/user/interestPaintingList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to get user interest painting list');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting user interest painting list:', error);
        return { error: 'Failed to get user interest painting list' };
    }
  }
  
  async function setSignature(userInfo) {
    try {
        const response = await fetch('/user/setSignature', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to set user signature');
        }
        return await response.json();
    } catch (error) {
        console.error('Error setting user signature:', error);
        return { error: 'Failed to set user signature' };
    }
  }
  
  
  export {
    loginUser,
    registerUser,
    changePassword,
    logoutUser,
    getUserInfo,
    getUserCollectionNovel,
    getUserCollectionPainting,
    getUserInterestNovelList,
    getUserInterestPaintingList,
    setSignature,
  };
  