function validate()
    {
        var ans=true;

        var t=document.getElementsByName("fn");
        for(var i=0;i<t.length;i++)
        {
            if(t[i].length===0)
            {
                console.log("Field-"+(i+1)+" is required");
                ans=false;
            }
        }
        var t=document.getElementsByName("1");
        var a=false;
        for(var i=0;i<t.length;i++)
        {
            
            if(t[i].checked)
            {
                a=true;
            }
        }
        if(a!==true)
        {
            console.log("Radio Button is not checked");
            ans=false;
        }
        var t=document.form.dropdown;
        if(t.selectedIndex===0)
        {
            console.log("Dropdown is required");
            ans=false;
        }
        var m=document.getElementById("email").value;
        if(!(m.includes('@') && m.endsWith('.com')))
        {
            console.log('Please enter Valid Email')
            ans=false;
        }
        console.log(ans);
        return ans;
       
    }

    var obj=[
        {firstname:'Kaushik',
        secondname:'Kandikonda',
        age:'20',
        gender:'Male',
        rollno:'078',
        dob:'15-10-2000'},
        {firstname:'harshit',
        secondname:'sai',
        age:'21',
        gender:'Male',
        rollno:'079',
        dob:'5-08-2001'}
    ];

    function submit()
    {
        for(var i=0;i<obj.length;i++)
        {
            obj[i].occupation=document.getElementById("occ").value;
        }
    }

    function get()
    {
        for(var i=0;i<obj.length;i++)
        {
            var j=0;
            if(obj[i].rollno===document.getElementById("roll").value)
            {
                console.log(obj[i]);
                j=1;
                break;
            }
            if(j===0)
            {
                console.log("Student details are not available!!Please Enter valid roll no")
            }
        }
    }