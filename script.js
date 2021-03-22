setInterval(()=>{
    const hr= document.querySelector("#hr");
    const mn= document.querySelector ("#mn");
    const sc= document.querySelector("#sc");
    
    let day= new Date();
    let hh= day.getHours() * 30;
    let mm= day.getMinutes() *6;
    let ss= day.getSeconds() *6;
    
    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${mm}deg)`;
    sc.style.transform=`rotateZ(${ss}deg)`;
    
    let Dhour= document.querySelector("#hour");
    let Dminute= document.querySelector("#minute");
    let Dsecond= document.querySelector("#second");
    let Dampm= document.querySelector("#ampm");

    
    let DigitalDay= new Date();
    let DigitalHr=DigitalDay.getHours();
    let DigitalMn=DigitalDay.getMinutes();
    let DigitalSc=DigitalDay.getSeconds();
    let ampm="AM";

    if(DigitalHr>12)
    {
        DigitalHr=DigitalHr-12;
        ampm="PM";
    }

    DigitalHr = DigitalHr<10 ? "0" + DigitalHr : DigitalHr;
    DigitalMn = DigitalMn<10 ? "0" + DigitalMn : DigitalMn;
    DigitalSc= DigitalSc<10 ? "0" + DigitalSc : DigitalSc;
    
    Dhour.innerHTML=DigitalHr+" :&nbsp";
    Dminute.innerHTML=DigitalMn+ " :&nbsp";
    Dsecond.innerHTML=DigitalSc+ "&nbsp";
    Dampm.innerHTML=ampm;



})
