$(document).ready(function() {
  //Delete referene from a list
  $('a.delete-reference').on('click', function(e) {
    e.preventDefault();
    $(e.target).siblings('form').submit();
  });

  //Cancel abstract form
  $(document).on('click', '.cancel-abstract-form', function(e) {
    e.preventDefault();
    abstractDiv = $(e.target).closest(".edit-abstract");
    abstractDiv.html(abstractDiv.data("undo-form"));
  });

  //Unhide and hide tags form
  $('a.add-tag').on('click', function(e) {
    e.preventDefault();

    tagsList = $(e.target).closest('.tags-list');
    tagsForm = tagsList.next('.tags-form');

    tagsList.toggleClass('hidden', true);
    tagsForm.toggleClass('hidden', false);
  });

  $('a.cancel-add-tag').on('click', function(e) {
    e.preventDefault();

    tagsForm = $(e.target).closest('.tags-form');
    tagsList = tagsForm.prev('.tags-list');

    tagsList.toggleClass('hidden', false);
    tagsForm.toggleClass('hidden', true);
  });

  //Add reference by DOI, Pubmed ID, and URL
  paperType = $('#add_locator_type');
  paperLocator = $('#reference_paper_locator_id');
  paperTitle = $('#reference_paper_title');
  paperSubmit = $('#add_locator_submit');
  cancelAddLocator = $('#cancel-add-locator');

  $('.add-paper a#add-doi').on('click', function() {
    paperLocator.toggleClass('hidden', false).attr("placeholder", "DOI ex: '10.1371/journal.pone.0001897'");
    paperType.val('doi');
    paperSubmit.toggleClass('hidden', false);
    cancelAddLocator.toggleClass('hidden', false);
    if (paperLocator.prop('disabled')) { paperLocator.prop('disabled', false); };
    paperTitle.toggleClass('hidden', true)
    if (!paperTitle.prop('disabled')) { paperTitle.prop('disabled', true); };
  });

  $('.add-paper a#add-pubmed').on('click', function() {
    paperLocator.toggleClass('hidden', false).attr("placeholder", "Pubmed ID ex: '18365029'");
    paperType.val('pubmed');
    paperSubmit.toggleClass('hidden', false);
    cancelAddLocator.toggleClass('hidden', false);
    if (paperLocator.prop('disabled')) { paperLocator.prop('disabled', false); };
    paperTitle.toggleClass('hidden', true)
    if (!paperTitle.prop('disabled')) { paperTitle.prop('disabled', true); };
  });

  $('.add-paper a#add-link').on('click', function() {
    paperLocator.toggleClass('hidden', false).attr("placeholder", "URL ex: http://journals.plos.org/plosone/article?id=example");
    paperType.val('link');
    paperSubmit.toggleClass('hidden', false);
    cancelAddLocator.toggleClass('hidden', false);
    if (paperLocator.prop('disabled')) { paperLocator.prop('disabled', false); };
    paperTitle.toggleClass('hidden', false)
    if (paperTitle.prop('disabled')) { paperTitle.prop('disabled', false); };
  });

  cancelAddLocator.on('click', function() {
    paperLocator.toggleClass('hidden', true).prop('disabled', true).val('');
    paperType.val('');
    paperSubmit.toggleClass('hidden', true);
    cancelAddLocator.toggleClass('hidden', true);
    paperTitle.toggleClass('hidden', true).val('');
    if (!paperTitle.prop('disabled')) { paperTitle.prop('disabled', true); };
  });
});
