
<template>
    <h1>Customers</h1>
    <div class="card">
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
            <Column field="action" header="Actions" style="width: 25%">
                <template #body>
                    <div :style="{ position: 'relative', height: 'fit' }">
                            <SpeedDial :model="items" direction="left" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>

    <Toast />

    <Dialog v-model:visible="visible" modal header="Edit Affiliate" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Update Some thing</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <InputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <InputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities"
                :maxSelectedLabels="3" class="flex-auto" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Save" @click="toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });"></Button>
        </div>
    </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useToast } from 'primevue/usetoast';
import SpeedDial from 'primevue/speeddial';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';



const customers = ref();
const toast = useToast();
const visible = ref(false);
const selectedCities = ref();
const cities = ref([
    { name: 'Rabat', code: 'MAR' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);


onMounted(() => {
    customers.value = [
        { name: 'Alex', country: { name: 'USA' }, company: 'PrimeTek', representative: { name: 'Alex' } },
        { name: 'Paul', country: { name: 'Germany' }, company: 'PrimeTek', representative: { name: 'Paul' } },
        { name: 'Raj', country: { name: 'India' }, company: 'PrimeTek', representative: { name: 'Raj' } },
        { name: 'Karla', country: { name: 'France' }, company: 'PrimeTek', representative: { name: 'Karla' } },
        { name: 'Mark', country: { name: 'UK' }, company: 'PrimeTek', representative: { name: 'Mark' } }
    ];
});


const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            visible.value = true;
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            visible.value = true;
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            console.log('Delete');
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
])
</script>
