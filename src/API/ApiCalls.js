
export const nyTimesData = () => {
    fetchAlldata = () => {
        return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EuYlii9tQVOlEKehvfy52Y7sVR0k1hRP')
        .then(res => res.json())
    },
    fetchCategory = (category) => {
        return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=EuYlii9tQVOlEKehvfy52Y7sVR0k1hRP`)
    }
}