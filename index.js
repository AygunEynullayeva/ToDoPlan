var counter=1
$('button').on('click', function(){
    var yazi=$('input').val()
    var p=$('<p>').text(yazi)
    p.addClass('yeni' +counter)
    newBtn=$('<button>V</button>')
    newBtn.addClass('yeniBtn')
    
    newBtn.attr('data-number',counter)
    p.prepend(newBtn)
    $('.box').append(p)
    $('input').val('')
    counter++
})
$(document).on('click', '.yeniBtn',function(){
    var reqem=this.dataset.number
    $('.yeni'+reqem).remove()
})