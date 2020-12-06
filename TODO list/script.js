let ulTask=$('#ulTask')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inpNewTask=$('#inpNewTask')



btnAdd.click(()=>
{
    let ListItem=$('<li>',
    {
        'class': 'list-group-item',
        text: inpNewTask.val()
        //console.log(text)
    })
    ulTask.append(ListItem)
    console.log(inpNewTask.val())
})
btnClear.click(()=> 
{inpNewTask.val("")
}
)
