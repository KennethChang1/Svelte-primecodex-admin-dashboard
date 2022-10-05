<script>
    import Row from "./Row.svelte";
    import Pagination from "./Pagination.svelte";
    import fetchData from "../data.js";
    export let heading;
    export let type;

    let rows = [];
    let path = "";
    let current_page = 1;
    let from = 1;
    let to = 1;
    let per_page = 1;
    let last_page = 1;
    let total = 0;

    function changePage(params) {

        fetchData(path, params, type)
        .then(function (response) {
            path = response.path;
            current_page = response.current_page;
            from = response.from;
            to = response.to;
            total = response.total;
            per_page = response.per_page;
            last_page = response.last_page;

            rows = response.data;
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
        });
    }

  changePage({ page: 1 });
</script>

<div class="container-table">
    <table class="table table-wide">
        <thead>
          <tr>
            {#each heading as heading}
                <th>{heading}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
            {#each rows as row, i}
                <Row {row} />
            {:else}
                <tr>
                    <td colspan="100%">
                        <h5 class="text-center">Loading...</h5>
                    </td>
                </tr>
            {/each}
        </tbody>
      </table>

      <Pagination
      {current_page}
      {from}
      {last_page}
      {per_page}
      {to}
      {total}
      on:change={(ev) => changePage({ page: ev.detail })}
    >
      ></Pagination
    >
</div>

<style>
    .table{
        width: 100%;
    }

    h5{
        text-align: center;
    }
</style>