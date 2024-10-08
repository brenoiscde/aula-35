const { videos } = require("../mock/dados.json");
class videosService{
    encontrarTodos() {
        return videos;
    }

    buscarPeloId(id) {
        return videos.find((v)=> v.id === id)
    }
    
    adicionar(video) {
        return videos.push(video)
    }
    
    atualizar(id, videoAtualizado) {
        const video = videos.find((v)=> v.id === id);
        video.titulo = videoAtualizado.titulo;
        video.descricao = videoAtualizado.descricao;
        video.quantidadeViews = videoAtualizado.quantidadeViews;
        video.canalID = videoAtualizado.canalID ;
    }
  
    excluir(id) {}      
}
module.exports = new videosService