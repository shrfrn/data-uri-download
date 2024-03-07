'use strict'

const gUsers = [
    { id: 'u101', username: 'lori', age: 17, lastLogin: 1709806532178, isAdmin: false },
    { id: 'u102', username: 'baba', age: 32, lastLogin: 1709806332628, isAdmin: true },
    { id: 'u103', username: 'gabi', age: 20, lastLogin: 1702206532378, isAdmin: false },
    { id: 'u104', username: 'jojo', age: 18, lastLogin: 1709804432679, isAdmin: false },
]

function getCSV(elLink) {
    const columnHeadings = 'Id, Username, Age, Last Login, Role\n'
    const csvLines = gUsers.map(user => {

        const date = new Date(user.lastLogin).toDateString()
        const role = user.isAdmin ? 'Admin' : 'User'

        return `${user.id},${user.username},${user.age},${date},${role}\n`
    })
    csvLines.unshift(columnHeadings)
    elLink.href = 'data:text/csv;charset=utf-8,' + csvLines.join('')
}