export default function()  {
    return function(item) {
        var regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        var emailArr = item.match(regEmail);
        var str = new String(item);
        
        for(let i = 0; i < emailArr.length; i++) {
            var newStr = str.replace(emailArr[i], `<a href="mailto:${emailArr[i]}">${emailArr[i]}</a>`);
        } 
        return newStr;
      
    }
}