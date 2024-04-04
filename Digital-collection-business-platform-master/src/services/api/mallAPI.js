async function fetchNovelList() {
    try {
        const response = await fetch('/mall/novelList');
        if (!response.ok) {
            throw new Error('Failed to fetch novel list');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching novel list:', error);
        return { error: 'Failed to fetch novel list' };
    }
  }
  
  async function fetchPaintingList() {
    try {
        const response = await fetch('/mall/paintingList');
        if (!response.ok) {
            throw new Error('Failed to fetch painting list');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching painting list:', error);
        return { error: 'Failed to fetch painting list' };
    }
  }
  
  async function fetchNovelDetail(novelInfo) {
    try {
        const response = await fetch('/mall/novelInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novelInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch novel detail');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching novel detail:', error);
        return { error: 'Failed to fetch novel detail' };
    }
  }
  
  async function fetchPaintingDetail(paintingInfo) {
    try {
        const response = await fetch('/mall/paintingInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paintingInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch painting detail');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching painting detail:', error);
        return { error: 'Failed to fetch painting detail' };
    }
  }
  
  async function addPainting(paintingInfo) {
    try {
        const response = await fetch('/mall/addPainting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paintingInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to add painting');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding painting:', error);
        return { error: 'Failed to add painting' };
    }
  }
  
  async function addNovel(novelInfo) {
    try {
        const response = await fetch('/mall/addNovel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novelInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to add novel');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding novel:', error);
        return { error: 'Failed to add novel' };
    }
  }
  
  
  export {
    fetchNovelList,
    fetchPaintingList,
    fetchNovelDetail,
    fetchPaintingDetail,
    addPainting,
    addNovel,
  };
  