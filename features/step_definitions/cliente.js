class Cliente{
         constructor(id = 0, nome ="", email = "", foto = ""){
           this.id = id;
           this.nome = nome;
           this.email = email;
           this.foto = foto;
         }
    

        isNome(){
              let regra=/^[a-z A-Z]{3,50}$/;
              return regra.test(this.nome);
           }
   
        isEmail(){
            let regra= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
            return regra.test(this.email);
         }

        isFoto(){
          let regra=/^[a-zA0-9A-Z.]{3,250}$/;
          return regra.test(this.foto);
        }
        
         isCliente(){
             if (this.isNome() && this.isEmail() && this.isFoto()){
               return true;
             }else{
              return false;
             }

          }
   
   
   }
      

module.exports= Cliente