export default function filterDir ($log ,$interpolate) {
    return  (scope, element, attrs ) => {

      var  text = $interpolate(element.text())(scope);
        console.log(text)
        var regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        var emailArr = text.match(regEmail);

        if(emailArr==null) {
            return;
        }

        var str = new String(text);
        
        for(let i = 0; i < emailArr.length; i++) {
            var newStr = str.replace(emailArr[i], `<a href="mailto:${emailArr[i]}">${emailArr[i]}</a>`);
        }
        element[0].innerHTML = newStr;
      
    };
}