import React, { Component } from "react";
import { View, StyleSheet} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {guardarUsuario} from '../web-build/register-service-worker'
import { cargarConfiguracion } from "../utils/conexion";


export class Registro extends Component{
  constructor(){
    super();
    if(!global.estaCargado){
      cargarConfiguracion();
    }
    this.state={
      cedula:'',
      nombre:'',
      apellidos:'',
      fechaNacimiento:'',
      correo:'',
      usuario:[],
    };
  };
  limpiarCajas=()=>{
    this.setState({
      cedula:'',
      nombre:'',
      apellidos:'',
      fechaNacimiento:'',
      correo:'',
    })
  }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Text}>REGISTRO DE USUARIO</Text>
                <View style={styles.Input}>
                    <Input
                    value={this.state.cedula}
                    label='CEDULA:'
                    keyboardType='decimal-pad'
                    placeholder='Ingrese numero de cedula'
                    onChangeText={(text)=>{
                            this.setState({cedula:text});
                    }}
                    leftIcon={
                        <Icon
                          name='address-card'
                          size={15}
                          color='#25C805'
                        />
                      }>
                    </Input>
                    <Input
                    value={this.state.nombre}
                    label='NOMBRE:'
                    placeholder='Ingrese Nombre'
                    onChangeText={(text)=>{
                            this.setState({nombre:text});
                    }}
                    leftIcon={
                        <Icon
                          name='user'
                          size={15}
                          color='#25C805'
                        />
                      }>
                    </Input>
                    <Input
                    value={this.state.apellidos}
                    label='APELLIDOS:'
                    placeholder='Ingrese Apellidos'
                    onChangeText={(text)=>{
                            this.setState({apellidos:text});
                    }}
                    leftIcon={
                        <Icon
                          name='user'
                          size={15}
                          color='#25C805'
                        />
                      }>
                    </Input>
                    <Input
                    value={this.state.correo}
                    label='CORREO:'
                    placeholder='Ingrese Correo'
                    onChangeText={(text)=>{
                            this.setState({correo:text});
                    }}
                    leftIcon={
                        <Icon
                          name='at'
                          size={15}
                          color='#25C805'
                        />
                      }>
                    </Input>
                    <Input
                    value={this.state.fechaNacimiento}
                    label='FECHA NACIMIENTO:'
                    keyboardType='decimal-pad'
                    placeholder='Ingrese Fecha de Nacimiento'
                    onChangeText={(text)=>{
                            this.setState({fechaNacimiento:text});
                    }}
                    leftIcon={
                        <Icon
                          name='calendar-alt'
                          size={15}
                          color='#25C805'
                        />
                      }>
                    </Input>
                </View>
                <View style={styles.Button}>
                  <Button
                   title='GUARDAR  '
                   type='outline'
                   onPress={()=>{
                      guardarUsuario({
                        cedula:this.state.cedula,
                        nombre:this.state.nombre,
                        apellidos:this.state.apellidos,
                        fechaNacimiento:this.state.fechaNacimiento,
                        correo:this.state.correo,
                          }
                          ,this.limpiarCajas);
                   }}
                   icon={
                    <Icon
                      name="upload"
                      size={25}
                      color="#25C805"
                    />
                        }
                    iconRight>

                  </Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text:{
    fontSize: 20,
    textAlign:'center',
    color:'#25C805',
  },
  Input:{
    alignItems: 'center',
    justifyContent: 'center',
    margin:4,
  },
  Button:{
    margin:20,
   
  },
});
