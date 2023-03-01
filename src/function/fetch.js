export const fetching = () => {
    fetch('http://localhost:8080/companies/123', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer V'
        }
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
        });
}