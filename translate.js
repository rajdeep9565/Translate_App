async function trans(){
    
    src_lang=document.getElementById('src_lang').value
    tar_lang=document.getElementById('tar_lang').value
    input_text=document.getElementById('input_text').value
    result_text=document.getElementById('result_text')
    
    
    console.log(src_lang)
    
    console.log(input_text)

   try{
    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: `${input_text}`,
		source: `${src_lang}`,
		target: `${tar_lang}`
	}),
	headers: { "Content-Type": "application/json" }
   });



   var result=await res.json();

   result_text.innerHTML=result.translatedText
   console.log(result.translatedText)

}

catch(e){console.log(e)}

    
    }