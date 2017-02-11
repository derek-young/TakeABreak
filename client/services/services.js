// Factory Service
(function() {
  const SERVICES = angular.module('zen.services', []);

  SERVICES.factory('GetBreak', function($http) {
    var getBreak = function(callback) {
      return $http({
        method: 'GET',
        url: '/api/break',
      }).then(function(resp) {
        // console.log('Here is a break: ', resp.data);
        return resp.data;
      });
    };

    return {
      get: getBreak,
    };
  });

  SERVICES.factory('Timer', function() {
    return {
      now: now,
      formatTime: formatTime
    }

    function now() {
      var date = new Date();
      return date.getTime();
    }

    function formatTime(milliseconds) {
      var minutes = Math.floor(milliseconds / (1000 * 60));
      var seconds = Math.round((milliseconds % (1000 * 60) / 1000), 0);
      return pad(minutes) + ':' + pad(seconds);
    }

    function pad(num) {
      return num.toString().length > 1 ? num : '0'.concat(String(num));
    }
  });

  SERVICES.factory('BroFactory', function() {
    var brotobase = [
      'camole',
      'mie',
      'seph',
      'sephenheim',
      'skillet',
      'tozoa',
      'tègè',
      'deo',
      'do Baggins',
      'hawk',
      'klahoma',
      'totype',
      'kemon',
      'metheus',
      'migo',
      'asaurus',
      '-rex',
      'sta Rica',
      'tocopter',
      'hemian Rhapsody',
      'zeman Bhrutana',
      'vakhiin',
      'mance',
      'mate',
      'ception',
      'manship',
      ' Man Chu',
      'aholic',
      'hammer',
      'dozer',
      'kini',
      'modo Dragon',
      'fessor',
      'sephina',
      'zilla',
      'kachu',
      'ey McBrosters',
      'nie Sanders'
    ];

    var getBro = function() {
      var randIndex = Math.floor(Math.random() * brotobase.length);
      return brotobase[randIndex];
    }

    return {
      getBro: getBro,
      brotobase: brotobase
    };
  });

  SERVICES.factory('ZenSetting', function($http) {
    var postSetting = function(day, startTime, endTime, breakType) {
      return $http({
        method: 'POST',
        url: '/api/users/settings',
        data: {
          day: day,
          startTime: startTime,
          endTime: endTime,
          breakType: breakType
        }
      });
    };

    var getSetting = function () {
      return $http({
        method: 'GET',
        url: '/api/users/settings'
      })
      .then(function (settingData) {
        console.log('Get setting data is :', settingData);
        return settingData.data;
      });
    };

    return {
      postSetting: postSetting,
      getSetting: getSetting
    };
  });

})();
