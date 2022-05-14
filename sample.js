$('#mydashboard_widget').append('<div id="columnAdd" class="js-add-list list-wrapper mod-add is-idle">\n' +
                            ' <form>\n' +
                            '                    <a id="open-add-column" class="open-add-list js-open-add-list" onclick="openAddColumn();" href="#"><span class="placeholder"><span\n' +
                            '                                    class="icon-sm fa fa-plus"></span>Добавьте еще одну колонку</span></a>\n' +
                            '<input\n' +
                            '           data-value=""  name="columninput" id="column_text_input" class="form-control list-name-input"\n' +
                            ' type="text"  placeholder="Ввести заголовок списка"   \n' +
                            '                            autocomplete="off">\n' +
                            '                    <div  class="list-add-controls u-clearfix"><button\n' +
                            '        id="btn_add_column"   onclick="widget_dashboard(\'add\', null, \'column\', $(\'#column_text_input\').val() );  $(\'#column_text_input\').val(\'\');return false;" \n' +
                            ' class="nch-button nch-button--primary mod-list-add-button js-save-edit" type="submit"\n' +
                            '                                >Добавить список</button><a style="font-size: 24px!important;font-weight: lighter;" id="closeColumn" onclick="openAddColumn()" class="fa fa-times fa-lg dark-hover js-cancel-edit" href="#"\n' +
                            '                                                           aria-label="Отменить редактирование"></a></div>\n' +
                            '                </div>\n' +
                            ' </form>'
                    );
