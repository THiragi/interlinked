<script lang="ts">
	import { parseISO, format } from 'date-fns';
	export let dateString: string;
	export let dateFormat: string | null = null;
	const date = parseISO(dateString);
</script>

<time datetime={dateString}>{format(date, dateFormat ?? 'yyyy.LL.dd' )}</time>