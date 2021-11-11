
export const nyTimesData = {
    fetchAlldata : async  () => {
        return await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EuYlii9tQVOlEKehvfy52Y7sVR0k1hRP')
        .then(res => res.json())
    },
    fetchCategory: async (category) => {
        return await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=EuYlii9tQVOlEKehvfy52Y7sVR0k1hRP`)
        .then(res => res.json())
    }
}