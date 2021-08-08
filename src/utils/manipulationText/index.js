export const Sorting = (property,type) => {
    var sortOrder = 1;
    
    if(type === "desc") {
        sortOrder = -1;
    }

    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = 0;

        if(property === 'created_at'){

            a = new Date(a[property].replace(" ","T")).getTime();
            b = new Date(b[property].replace(" ","T")).getTime();

            if(type === "desc"){
                result = a < b ? 1 : a > b ? -1 : 0;
            } else {
                result = a > b ? 1 : a < b ? -1 : 0;
            }

            return result

        } else {
            result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }

    }
}

export const convertRupiah = (money) => {
  
    var	number_string = money.toString(),
    sisa 	= number_string.length % 3,
    rupiah 	= number_string.substr(0, sisa),
    ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
        
    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return rupiah
    
}

export const formatedDate = (date) => {
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];
    var d = new Date(date.replace(" ", "T"));
    return d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
}
