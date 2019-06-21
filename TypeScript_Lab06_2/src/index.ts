import app from './app';
import {connect} from 'mongoose';

(async()=>{
    try{
    //Conectar ao MongoDB
    const servidorMongoDB = `mongo://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
    await connect(servidorMongoDB,{useNewUrlParser:true});

    //iniciar o express
    app.listen(app.get('port'), () => {
        console.log(`Express executando em http://localhost:${app.get('port')} no modo ${app.get('env')}`);
    });
} catch (error){
    console.log('Erro');
    console.log(error);
}

});