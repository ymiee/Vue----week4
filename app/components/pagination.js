export default {
  props:['propsPage',],
  template:`
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !propsPage.has_pre }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(propsPage.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in propsPage.total_pages" :key="page + 'page'"
          :class="{ active: page === propsPage.current_page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{ disabled: !propsPage.has_next }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(propsPage.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>      
    </nav>
  `,
  methods: {
    changePage(n) {
      this.$emit('get-products', n);
    },    
  },
};
