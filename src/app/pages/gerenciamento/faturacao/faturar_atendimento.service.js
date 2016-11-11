/**
 * @author Vitor Silva Lima <vitor.lima2@fatec.sp.gov.br>
 * created on 07/08/2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gerenciamento.faturamentoAtendimento')
    .factory('faturamentoService', faturamentoService);

  /** @ngInject */
  function faturamentoService($http,ENDPOINT_API) {
    var path = "faturamento";
    var url = ENDPOINT_API +path;
    function all(){
      return $http.get(url);
    }
    function create(item) {
      return $http.post(url, item);
    };
    function update(item) {
      return $http.put(url+'/'+item.usuario_id, item);
    };
    function deleta(item) {
      return $http.delete(url+'/'+item.usuario_id);
    };
    return {
      all:all,
      create:create,
      update:update,
      deleta:deleta
    };
  }
})();