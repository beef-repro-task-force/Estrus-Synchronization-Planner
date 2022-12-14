import React from 'react';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SynchProtocolTitleData from "./SynchronozationProtocolTitles.json"
import swal from 'sweetalert';
import "./ProtocolPage.css"
import { FilterList } from '@material-ui/icons';

const ProtocolPage = props => {
    const {
        UserFlow, setUserFlow, 
        BreedType, CowOrHeifer, SemenType,
        SystemType, SynchronizationProtocol, setSynchronizationProtocol 
    } = props;
    
    let filteredList = [];
    
    //Cow Prefferd #1
    function CP1(){
        if(BreedType === 1 && SystemType === 1){
            //V39
            filteredList.push(7)
        }
        else{
            if(BreedType === 1 && SystemType === 2){
                //V48
                filteredList.push(16)
            }
            else{
                if(BreedType === 1 && SystemType === 3){
                    //V54
                    filteredList.push(22)
                }
                else{
                    if(BreedType === 1 && SemenType === 1 && SystemType === 4){
                        //V72
                        filteredList.push(40)
                    }
                    else{
                        if(BreedType === 1 && SemenType === 2 && SystemType === 4){
                            //V76
                            filteredList.push(44)
                        }
                        else{
                            if(BreedType === 2 && SemenType === 1 && SystemType === 3){
                                //V69
                                filteredList.push(37)
                            }
                        }
                    }
                }
            }
        }
    }

    //Cow Prefferd #2
    function CP2 (){
        if(BreedType === 1 && SystemType === 1){
            //V46
            filteredList.push(14)
        }
        else{
            if(BreedType === 1 && SystemType === 2){
                //V51
                filteredList.push(19)
            }
            else{
                if(BreedType === 1 && SystemType === 3){
                    //V61
                    filteredList.push(29)
                }
            }
        }
    }

    //Cow Prefferd #3
    function CP3(){
        if(BreedType === 1 && SystemType === 1){
            //V66
            filteredList.push(34)
        }
        else{
            if(BreedType === 1 && SystemType === 2){
                //V65
                filteredList.push(33)
            }else{
                if(BreedType === 1 && SemenType === 1 && SystemType === 3){
                    //Y71
                    filteredList.push(39)
                }
            }
        }
    }

    //Cow Less Prefferd #1
    function CLPS1(){

        if(BreedType === 1 && SystemType === 1){
            //V33
            filteredList.push(1)
        }
        else{
            if(BreedType === 1 &&  SystemType === 2){
                //V57
                filteredList.push(25)
            }
            else{
                if(BreedType === 1 && SemenType === 1 && SystemType === 3){
                    //V42
                    filteredList.push(10)
                }
                else{
                    if(BreedType === 1 && SemenType === 2 && SystemType === 1){
                        //V39
                        filteredList.push(7)
                    }
                    else{
                        if(BreedType === 1 && SemenType === 2 && SystemType === 2){
                            //V48
                            filteredList.push(16)
                        }
                        else{
                            if(BreedType === 1 && SemenType === 2 && SystemType === 3){
                                //V71
                                filteredList.push(39)
                            }
                            else{
                                if(BreedType === 2){
                                    //AC33
                                    if(SemenType === 1 && SystemType === 1){
                                        //V39
                                        filteredList.push(7)
                                    }
                                    else{
                                        if(SemenType === 1 && SystemType === 2){
                                            //V48
                                            filteredList.push(16)
                                        }
                                        else{
                                            if(SemenType === 1 && SystemType === 3){
                                                //V54
                                                filteredList.push(22)
                                            }
                                            else{
                                                if(SemenType === 2 && SystemType === 3){
                                                    //V69
                                                    filteredList.push(37)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //Cow Less Preffered #2
    function CLPS2(){
        if(BreedType === 1 && SystemType === 1){
            //V34
            filteredList.push(2)
        }
        else{
            if(BreedType === 1 && SemenType === 1 && SystemType === 3){
                //V45
                filteredList.push(13)
            }
            else{
                if(BreedType === 1 && SemenType === 2 && SystemType === 1){
                //V46
                filteredList.push(14)
                }
                else{
                    if(BreedType === 1 && SemenType === 2 && SystemType === 2){
                        //Blank
                    }
                    else{
                        if(BreedType === 1 && SemenType === 2 && SystemType === 3){
                            //Blank
                        }
                        else{
                            if(BreedType === 2){
                                //AC34
                                if(SemenType === 1 && SystemType === 1){
                                    //V46
                                    filteredList.push(14)
                                }
                                else{
                                    if(SemenType === 1 && SystemType === 2){
                                        //V51
                                        filteredList.push(19)
                                    }
                                    else{
                                        if(SemenType === 1 && SystemType === 3){
                                            //V61
                                            filteredList.push(29)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //Cow Less Preffered #3
    function CLPS3(){
        if(BreedType === 1 && SystemType === 1){
            //V35
            filteredList.push(3)
        }
        else{
            if(BreedType === 1 && SemenType === 1 && SystemType === 3){
                //V67
                filteredList.push(35)
            }
            else{
                if(BreedType === 1 && SemenType === 2 && SystemType === 1){
                    //V66
                    filteredList.push(34)
                }
                else{
                    if(BreedType === 2){
                        //AC35
                        if(SemenType === 1 && SystemType === 1){
                            //V66
                            filteredList.push(34)
                        }
                        else{
                            if(SemenType === 1 && SystemType === 2){
                            //V65
                            filteredList.push(33)
                            }
                        }
                    }
                }
            }
        }
    } 

    //Cow Less Preffered #4
    function CLPS4(){
        if(BreedType === 1 && SystemType === 1){
            //V47
            filteredList.push(15)
        }
    }

    //Heifer Preffered System #1
    function HP1(){
        if(BreedType === 1 && SystemType === 1){
            //V33
            filteredList.push(1)
        }
        else{
            if(BreedType === 1 && SystemType === 2){
                //V48
                filteredList.push(16)
            }
            else{
                if(BreedType === 1 && SemenType === 1 && SystemType === 3 ){
                    //V55
                    filteredList.push(23)
                }
                else{

                    if(BreedType === 1 && SemenType === 1 && SystemType === 4 ){
                        //V73
                        filteredList.push(41)
                    }
                    else{

                        if(BreedType === 1 && SemenType === 2 && SystemType === 4 ){
                            //76
                            filteredList.push(44)
                        }
                        else{
                            if(BreedType === 1 && SemenType === 2 && SystemType === 3 ){
                                //74
                                filteredList.push(42)
                            }
                        }
                    }
                }
            }
        }
    }

    //Heifer Preffered System #2
    function HP2(){
        if(BreedType === 1 && SystemType === 1){
            //V38
            filteredList.push(6)
        }
        else {
            if(BreedType === 1 && SystemType === 2){
                //V58
                filteredList.push(26)
            }
            else{
                if(BreedType === 1 && SystemType === 3){
                    //V59
                    filteredList.push(27)
                }
                else{
                    if(BreedType === 1 && SystemType === 4){
                        //V77
                        filteredList.push(45)
                    }
                }
            }
        }
    }

    //Heifer Preffered System #3
    function HP3(){
        if(BreedType === 1 && SystemType === 1){
            //V47
            filteredList.push(15)
        }
        else {
            if(BreedType === 1 && SystemType === 2){
                //V63
                filteredList.push(31)
            }
            else{
                if(BreedType === 1 && SystemType === 3){
                    //V64
                    filteredList.push(32)
                }
                else{
                    if(BreedType === 1 && SystemType === 4){
                        //78
                        filteredList.push(46)
                    }
                }
            }
        }
    }
    
    //Heifer Preffered System #4
    function HP4(){
        if(BreedType === 1 && SystemType === 3){
            //V70
            filteredList.push(38)
        }
        else{
            if(BreedType === 1 && SystemType === 4){
                //V79
                filteredList.push(47)
            }
        }
    }
    
    //Heifer Preffered System #5
    function HP5(){
        if(BreedType === 1 && SemenType === 2 && SystemType === 3){
            //V75
            filteredList.push(43)
        }else{
            if(BreedType === 1 && SemenType === 1 & SystemType === 3){
                //Y80
                FilterList.push(48)
            }
        }
    }

    //Heifer Less Preffered System #1
    function HLPS1(){
        if(BreedType === 1 && SemenType === 1){
            //AC46
            if(SystemType === 1){
                //V35
                filteredList.push(3)
            }
            else{
                if(SystemType === 2){
                    //Y57
                    filteredList.push(25)
                }else{
                    if(SystemType === 3){
                        //V60
                        filteredList.push(28)
                    }
                }
            }
        }
        else{
            if(BreedType === 2){
                //AC39
                if(SystemType === 1){
                    //V33
                    filteredList.push(1)
                }
                else{
                    if(SystemType === 2){
                        //V48
                        filteredList.push(16)
                    }
                    else{
                        if(SystemType === 3){
                            //V55
                            filteredList.push(23)
                        }
                    }
                }
            }
        }
    }

    //Heifer Less Preffered System #2
    function HLPS2(){
        if(BreedType === 1 && SemenType === 1){
            //AC47
            if(SystemType === 1){
                //V44
                filteredList.push(12)
            }
            else{
                if(SystemType === 3){
                    //V68
                    filteredList.push(36)
                }
            }
        }
        else{
            if(BreedType === 2){
                //AC40
                if(SystemType === 1){
                    //V38
                    filteredList.push(6)
                }
                else{
                    if(SystemType === 2){
                        //V58
                        filteredList.push(26)
                    }
                    else{
                        if(SystemType === 3){
                            //V59
                            filteredList.push(27)
                        }
                    }
                }
            }
        }
    }

    //Heifer Less Preffered System #3
    function HLPS3(){
        if(BreedType === 1 && SemenType === 1 ){ 
            //AC48
            if(SystemType === 1){
                //V46
                filteredList.push(14)
            }
            else{
                if(SystemType === 3){
                    //V75
                    filteredList.push(43)
                }
            }
        }
        else{
            if(BreedType === 2){
                //AC41
                if(SystemType === 1){
                    //V47
                    filteredList.push(15)
                }
                else{
                    if(SystemType === 2 ){
                        //V63
                        filteredList.push(31)
                    }
                    else{
                        if(SystemType === 3) {
                            //V64
                            filteredList.push(32)
                        }
                    }
                }
            }
        }
    }

    //Heifer Less Preffered System #4
    function HLPS4(){
        if(BreedType === 1 && SemenType === 1){
            //AC49
            if( SystemType === 1){
                //V62
                filteredList.push(30)
            }
        }
        else{
            if(BreedType === 2){
                //AC42
                if(SystemType === 1){
                    //V62
                    filteredList.push(30)
                }
                else{
                    if(SystemType === 3){
                        //V69
                        filteredList.push(37)
                    }
                }
            }
        }
    } 

    const filterProtocols = () => {
        //If working with Cows
        if(CowOrHeifer === 1){
            //7 possible additions
            //Less Preffered Systems
            CLPS1();
            CLPS2();
            CLPS3();
            CLPS4();
            
            //Preffered Systems
            CP1();
            CP2();
            CP3();
            
            
        }
        
        //If working with Heifers
        if(CowOrHeifer === 2){
            //9 possible additions
            //Preffered Systems
            HP1();
            HP2();
            HP3();
            HP4();
            HP5();

            //Less Preffered Systems
            HLPS1();
            HLPS2();
            HLPS3();
            HLPS4();
        }
    }

    filterProtocols();

    console.log("props", props)    
    console.log("protocol list" ,filteredList)
    console.log("you picked protocol #" , 4 )    

    const CheckDataAndSubmit = () =>
    {
        if( SynchronizationProtocol === undefined ){
            swal( "Select a Protocol to Continue",{
                icon: "error",
              });
        }
        else{
            setUserFlow(UserFlow + 1)
        }
    }

    return (
        
        <div className='protocol-div-container'>

            <br />
            <Breadcrumbs className='bread-crumb-class'>
                <Link onClick={() => {setUserFlow(UserFlow -1)}}>
                Home
                </Link>
                <Typography aria-label="breadcrumb">
                Protocol
                </Typography>
            </Breadcrumbs>
            <br />   
                      

            <br />
            <br />
            {/* Select Protocol */}
            <FormControl variant = "filled" className='Input-formcontrol-style'>
                <InputLabel>Select Protocol</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { SynchronizationProtocol || undefined  } 
                    onChange ={ ( event ) => {setSynchronizationProtocol(event.target.value)}} 
                >
                     {filteredList.map( (jsonKey, index) => {
                        return <MenuItem key={index} value={jsonKey} >({jsonKey}) {SynchProtocolTitleData[jsonKey].SynchronizationSystemTitle}</MenuItem>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            <Button 
                onClick = {() => {setUserFlow(UserFlow -1)}}
                variant   = "outlined" 
                size      = "large"
                className='custom-btn-styling-stuff'
            >
            Return
            </Button>
            <Button 
                onClick = {() => {CheckDataAndSubmit()}}
                variant   = "outlined" 
                size      = "large"
                className='custom-btn-styling-stuff'
            >
            Submit
            </Button>
        </div>
    );
} /* end ProtocolPage */

export default ProtocolPage;