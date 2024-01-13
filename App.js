
import react from 'react';
import{View, Text, Image, TextInput, Button, Linking, ScrollView} from 'react-native';


const portofolio = () => {
  return(
    <View style={{backgroundColor:'#ef746a', padding:'100', alignItems:'center'}}>
        <Image 
        style={{width:250, height:250, borderRadius:200, margin:20}} 
        source={require('./assets/qila.jpg')}/>
        <Text style={{fontWeight:'bold', fontSize:20,textAlign:'center', color:'black'}}>Shofi Tiasamara Aqila</Text>
        <Text style={{fontWeight:'600', textAlign:'center', color:'black',marginTop:20, padding:20}}> Saya</Text> 
        <Text style={{fontWeight:'bold'}}> Shofi Tiasamara Aqila.</Text> <Text> Seorang Siswa SMK Telkom Purwokerto dari Jurusan Rekayasa Perangkat Lunak.</Text>
        
        <Text style={{marginTop : 20, fontWeight:'bold', fontSize:20,textAlign:'center', color:'black'}}>My Project</Text>
        <Image style={{marginTop:10,width:300, height:200, borderRadius:10}} source={require('./assets/project.jpg')}/>

        <View style={{marginTop:10,marginLeft:-185,}}>
        <Text style={{fontWeight:'Bold', fontSize:'500',textAlign:'Left', color:'black'}}>CeitaYuk</Text>
        <Text style={{fontWeight:'medium', fontSize:'500',textAlign:'Left', color:'gray'}}>Mobile UI Design</Text>  
        </View>
        
        <View 
        style={{
          marginTop:-36, 
          marginLeft:160,
          }}>
           </View>
    </View>

  )
}
export default portofolio;