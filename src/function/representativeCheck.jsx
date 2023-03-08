export const representativeCheck = async (representative, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/studentrepresentatives-by?phoneNumber=${encodeURIComponent(representative.phoneNumber)}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}