module.exports = {
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            iso: `${day}/${month}/${year}`,
            isoCalendar: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }
}