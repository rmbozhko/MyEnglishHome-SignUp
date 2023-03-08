export const representativePOST = async (representative, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/studentrepresentative`), {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(representative)
    });
}