(function () {
  'use strict';

  angular.module('BlurAdmin.pages.atendimento.service',[])
  .factory('atendimentoService', atendimentoService);

  /** @ngInject */
  function atendimentoService($http,ENDPOINT_API,Session,$log) {
    var path = "atendimentos";
    var url = ENDPOINT_API +path;
    var date = new Date();
    $log.debug("Year: "+date.getFullYear()+" Month: "+date.getMonth());

    function all(){
      return $http.get(url);
    }
    function all(data){
      date = data;
      $log.debug("Retrieving by Year: "+date.getFullYear()+" Month: "+(date.getMonth()+1));
      return $http.get(url+"/"+date.getFullYear()+"/"+(date.getMonth()));
    }
    function create(item) {
      console.log(item);
      return $http.post(url, item);
    }
    function update(item) {
      return $http.put(url+"/"+item.id, item);
    }
    function finalizar(item) {
      return $http.put(url+"/finalizar/"+item.atendimento_id, item);
    }
    function deleta(item) {
      return $http.delete(url+"/"+item.id);
    }

    function getCliente(cnpj){
        return $http.get(ENDPOINT_API+"clientes/"+cnpj);
    }

    function getByClienteID(cnpj){
        return $http.get(ENDPOINT_API+"atendimento/cliente/"+cnpj);
    }

    return {
      all:all,
      getCliente:getCliente,
      finalizar:finalizar,
      create:create,
      update:update,
      deleta:deleta,
      getByClienteID:getByClienteID
    };
  }
})();