let group =
    {
        title: 'Java 10',
        students: ['Gena', 'Andrey', 'Elena', 'Anton'],
        showList: function ()
        {
            const show = (name) =>
            {
                console.log(`${this.title}: ${name}`)
            }
            this.students.forEach(show)
        }
    }

group.showList()
let newFGroup = group
group = null
console.log('---------------------------------')
newFGroup.showList()