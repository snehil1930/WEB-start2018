let ulTask=$('#ulTask')
let btnAdd=$('#btnAdd')
let btnreset=$('#btnreset')
let inpNewTask=$('#inpNewTask')
let btnCleanup=$('#btnCleanup')
let btnSort=$('#btnsort')
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
        //console.log("hello")
    })
    ulTask.append(ListItem)
    ToggleButtons()
   // console.log(inpNewTask.val())
}

function  clearingtask()
{
    $('#ulTask li.done').remove()
    ToggleButtons()
}


function sorting()
{
    console.log('sorting')
    $('#ulTask li.done').appendTo(ulTask)
}


function ToggleButtons()
{
     btnreset.prop('disabled',inpNewTask.val()=='')
     btnAdd.prop('disabled',inpNewTask.val()=='')
     btnCleanup.prop('disabled',ulTask.children().length<1)
     btnSort.prop('disabled',ulTask.children().length<1)
}



inpNewTask.keypress((e)=> 
{  
    if(e.which==13)
    additem()
})


inpNewTask.on('input',ToggleButtons)

btnAdd.click(additem)


btnCleanup.click(clearingtask)


btnSort.click(sorting)


btnreset.click(()=> 
{
    inpNewTask.val("")
    ToggleButtons()
}
)
