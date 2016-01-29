<script>
  $(document).ready(function(){
    $(".PagerControl span").each(function() {
      var $this = $(this);
      $this.html($this.html().replace(/&nbsp;/g, ''));
    });
    $('.PagerNumberArea span:empty').remove();
    $('.PagerControl').children('div').removeAttr('style');
  });
</script>