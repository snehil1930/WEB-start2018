let ulTask=$('#ulTask')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inpNewTask=$('#inpNewTask')

function additem()
{
    let ListItem=$('<li>',
    {
        'class': 'list-group-item',
        text: inpNewTask.val()
        //console.log(text)
    })
    ListItem.click(()=>
    {
        ListItem.toggleClass('done')
        console.log("hello")
    })
    ulTask.append(ListItem)
   // console.log(inpNewTask.val())
}
inpNewTask.keypress((e)=> 
{  
    if(e.which==13)
    additem()
}
)

btnAdd.click(additem)


btnClear.click(()=> 
{inpNewTask.val("")
}
)
