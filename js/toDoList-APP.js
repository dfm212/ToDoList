$(function(){

  var folders = {
    folder: [],
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function() {
      this.$el = $('#wallModule');
      this.$buttonAddFolder = this.$el.find('button.add');
      this.$buttonInputAddFolder = this.$el.find('button.newFolder');
      this.$buttonCancelFolder = this.$el.find('button.cancel');
      this.$buttonAddboard = this.$el.find('button.newBoard');
      this.$input = this.$el.find('input');
      this.$ol = this.$el.find('ol');
      this.template = this.$el.find('#folder-template').html();
    },
    bindEvents: function(){
      this.$buttonInputAddFolder.on('click', this.show.bind(this));
      this.$buttonAddFolder.on('click', this.addFolder.bind(this));
      this.$buttonAddboard.on('click', this.addBoard.bind(this));
      this.$ol.delegate('i.del', 'click', this.deleteFolder.bind(this));
      this.$buttonCancelFolder.on('click', this.hideInputFolder.bind(this));
    },
    render: function(){
      var data = {
        folder: this.folder,
      };
      this.$ol.html(Mustache.render(this.template, data));
    },
    addFolder: function(){
      if(this.$input.val().length >= 1){
        this.folder.push(this.$input.val());
        this.render();
        this.$input.val('');

        $('.hiden').addClass('hide');
        $('.newFolder').removeClass('hide');
      }
    },
    show: function(){
      var toShow = $(".newFolder").on('click', function(){
        $(this).addClass('hide');
        $('.hiden').removeClass('hide');
      });
    },
    hideInputFolder: function(){
      var cancel = $('button.cancel').on('click', function(){
        $('.hiden ').addClass('hide');
        $('.newFolder').removeClass('hide');
      });
      this.render();
    },
    addBoard: function(){
      // var toAddBoard = $("#newBoard").click(function(){
      //
      // });
      var toAddBoard = $("#newBoard").click(function(){
          // $("#boardsModule").append($("#board").clone(false));
          alert("Te digo que esto es una beta camilo!!");
      });
      this.render();
    },

    deleteFolder: function(event){

      var $remove = $(event.target).closest('li');
      var i = this.$ol.find('li').index($remove);

      this.folder.splice(i, 1);
      this.render();
    }

  };
  folders.init();

  //i need to add a new board with all its attributes



  $('.boardTitle').bind('dblclick', function(){
        $(this).attr('contentEditable',true);
    });



});
