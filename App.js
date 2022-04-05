import * as React from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}>INSTAGRAM</Text>
      <Text style={estilo.frase}>Poste suas fotos aqui!</Text>
      <ScrollView style={estilo.fotos}>
      <Text style={estilo.legenda}>RECEEEBAAAA</Text>
      <Image style={estilo.img} source= {require("./assets/luva1.jfif")}/>
      <Text style={estilo.ccc}>Curtidas              Comentários           Compartilhamentos</Text>

      <Text style={estilo.legenda}>É o Melhor do Brasil</Text>
      <Image style={estilo.img} source= {require("./assets/luva2.jfif")}/>
      <Text style={estilo.ccc}>Curtidas              Comentários           Compartilhamentos</Text>

      <Text style={estilo.legenda}>Obrigado meu Deus</Text>
      <Image style={estilo.img} source= {require("./assets/luva3.jfif")}/>
      <Text style={estilo.ccc}>Curtidas              Comentários           Compartilhamentos</Text>

      <Text style={estilo.legenda}>Luva de Pedreiro</Text>
      <Image style={estilo.img} source= {require("./assets/luvadepedreiro.jfif")}/>
      <Text style={estilo.ccc}>Curtidas              Comentários           Compartilhamentos</Text>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FF1493'
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:50,
    marginBottom:20,
    fontWeight:'bold',
  },
  frase:{
    textAlign:'center',
    fontSize:18,
    marginBottom:20,
    fontFamily: 'Euphemia UCAS',
  },
  img:{
    width:350,
    height:250,
    borderRadius:5
  },
  legenda:{
    textAlign:'center',
    marginBottom:20,
    marginTop:5,
    fontFamily: 'Optima',
    fontSize:20,
  },
  fotos:{
    alignItems:'center',
  },
  ccc:{
    fontSize:13,
    marginBottom:25,
  }
});
