async function getData( url , data ){
    try{
        url = await fetch("info.json")
        data = await url.json()
        let u = localStorage.atomName - 1
        arr = data.elements[u].shells
        data = data.elements

        for(let i = 0 ; i < data.length ; i++){
            if( data[i].number == localStorage.atomName ){
                const header  = document.querySelector("h1")
                header.textContent = data[i].name
                const section = document.querySelector("section")
                section.innerHTML = ` Atom named ${data[i].name} has been discovered by ${data[i].discovered_by}. ${data[i].name} has the atomic Number ${data[i].number} and has atomic mass ${data[i].atomic_mass}. It has boiling Temperature of ${data[i].boil}deg Celcius and density of ${data[i].density} g/cm3. It has a Melting point of ${data[i].melt} deg Celcius & has a molar heat ${data[i].molar_heat}. It belongs to period ${data[i].period} , group number ${data[i].group} ${data[i].block}block & has xpos = ${data[i].xpos} , ypos = ${data[i].ypos} , wxpos = ${data[i].wxpos} , wypos = ${data[i].wypos}. It has Shells [ ${data[i].shells} ] has electronic configuration [ ${data[i].electron_configuration} ] has electron configuration semantic as ${data[i].electron_configuration_semantic} . It has the electron affinity of ${data[i].electron_affinity} has the electronegativity pauling of ${data[i].electronegativity_pauling}. It has the ionization energy as [ ${data[i].ionization_energies} ] `
                
                const summary = document.querySelector(".summary")
                summary.textContent = data[i].summary
            }
        }


        const atom = document.querySelector(".atom")
        let nucleus = document.createElement("div")
        nucleus.setAttribute("class","nucleus")
        atom.appendChild(nucleus)

        let j = 0
        let height = 4
        let radius = 0
        for(let i = 0 ; i < arr.length ; i++){
            let o = 0
            for( let k = 1 ; k <= arr[i] ; k++ ){
                j++
                let h = 360/arr[i]
                const create = document.createElement("div")
                const electron = document.createElement("div")
                electron.setAttribute("class",`electron electron${i} shift${j}`)
                electron.style.rotate = `${o}deg`
                electron.style.height = `${height}em`
                electron.style.width = `${height}em`
                electron.style.padding = `${radius}em`
                nucleus.append(electron)
                o = o + h
            }
            height = height + 4
            radius = radius + 0.8
        }
    }
    catch(error){
        console.log("error")
    }
}
getData()