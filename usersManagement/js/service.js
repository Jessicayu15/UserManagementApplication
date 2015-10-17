/**
 * Created by Jessica on 10/15/2015.
 */
//services
myApp.service('myService',function($resource){

    this.resourceTest=$resource(
        "data.json",
        {callback:"JSON_CALLBACK"},
        {get:{method:"get",isArray:true}}
    );

    this.editSelectedFlag=false;
    this.datas=[];

    this.delete=function(index){
        this.datas.splice(index,1);
    };
    this.edit=function(index){
        this.datas[index].editFlag=true;
    };
    this.save=function(index){
        this.datas[index].editFlag=false;
        //console.log(this.datas[index]);
    };
    this.editSelected=function(){
        return true;
    }
    this.saveAll=function(){

    }
})