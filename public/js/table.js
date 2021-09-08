const fetchMarks = () => {
    return fetch('/marks')
        .then(response => response.json())
        .then(data => data.data)
}

const deleteMark = (id) => {
    return fetch(`/marks/${id}`, {
        method: 'DELETE'
    })
}

class MarksTable {
    constructor(selector) {
        this.tableBody = $(selector)
    }

    refresh = () => {
        fetchMarks()
            .then(marks => this.render(marks))
    }

    handleMarkDelete = (id) => {
        deleteMark(id)
        this.refresh()
    }

    appendEntry = (index, mark) => {
        const deleteButton = $('<button>Delete</button>').on('click', () => {
            this.handleMarkDelete(mark.id)
        })

        const row = $('<tr></tr>')
            .append(`<td class="table-row-index">${index}</td>`)
            .append(`<td>${mark.studentas}</td>`)
            .append(`<td>${mark.kursas}</td>`)
            .append(`<td class="${this.markClass(mark.pazymys)}">${mark.pazymys}</td>`)
            .append(`<td>${(new Date(mark.data)).toLocaleString('lt-LT')}</td>`)
            .append($('<td></td>')
                .append(deleteButton)
            )

        this.tableBody.append(row)
    }

    markClass = (mark) => mark >= 5 ? 'mark-positive' : 'mark-negative'

    render = (marks) => {
        this.tableBody.empty()

        marks.forEach((mark, index) => {
            this.appendEntry(index + 1, mark)
        })
    }
}

$(document).ready(() => {
    const marksTable = new MarksTable('#marks-table > tbody')
    marksTable.refresh()

    $('#refresh-table').click(() => {
        marksTable.refresh()
    })
})
