import axios from 'axios'

const cheapshark_endpoint_url = 'https://www.cheapshark.com/api/1.0'

async function getGames (params) {
    return (await axios.get(`${cheapshark_endpoint_url}/games`, { 
        params: { ...params }
    })).data
}

async function gameLookup (id) {
    return await (await axios.get(`${cheapshark_endpoint_url}/games`, { 
        params: { id: id }
    })).data
}

async function multiGameLookup (ids) {
    return await (await axios.get(`${cheapshark_endpoint_url}/games`, { 
        params: { id: ids } 
    })).data
}

async function gameDeals (params) {
    return await (await axios.get(`${cheapshark_endpoint_url}/deals`, { 
        params: { ...params }
    })).data
}

async function gameDealLookup (id) {
    return await (await axios.get(`${cheapshark_endpoint_url}/deals`, { 
        params: { id: id }
    })).data
}

async function storeInfo (params) {
    return await (await axios.get(`${cheapshark_endpoint_url}/stores`, { 
        params: { ...params }
    })).data
}

async function editAlertDeal (action, email, gameId, price) {
    return await (await axios.get(`${cheapshark_endpoint_url}/alert`, { params: {
        action: action,
        email: email,
        gameID: gameId, 
        price: price
    }})).data
}

async function manageAlertDeal (action, email) {
    return await (await axios.get(`${cheapshark_endpoint_url}/alert`, { params: {
        action: action,
        email: email
    }})).data
}

export default {
    getGames,
    gameLookup,
    multiGameLookup,
    gameDeals,
    gameDealLookup,
    storeInfo,
    editAlertDeal,
    manageAlertDeal
}