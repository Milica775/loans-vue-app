import Home from '../components/Home.vue';
import About from '../components/About.vue';
import BasedOnThePurposeLoans from '../components/bank/loansBasedOnThePurpose/BasedOnThePurposeLoans.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import HomeLoans from '../components/bank/loansBasedOnThePurpose/HomeLoans';
import EducationLoans from '../components/bank/loansBasedOnThePurpose/EducationLoans';
import PersonalLoans from '../components/bank/loansBasedOnThePurpose/PersonalLoans';
import VehicleLoans from '../components/bank/loansBasedOnThePurpose/VehicleLoans';
import BasedOnThePledgedAssetsLoans from '../components/bank/loansBasedOnThePledgedAssets/LoansBasedOnThePledgedAssets';
import LoansBasedOnTheSecurityProvider from '../components/bank/loansBasedOnTheSecurityProvider/LoansBasedOnTheSecurityProvider';
import GoldLoans from '../components/bank/loansBasedOnThePledgedAssets/GoldLoans';
import LoansAgainstAssets from '../components/bank/loansBasedOnThePledgedAssets/LoansAgainstTheAssets';
import SecuredLoans from '../components/bank/loansBasedOnTheSecurityProvider/SecuredLoans';
import UnsecuredLoans from '../components/bank/loansBasedOnTheSecurityProvider/UnsecuredLoans';
import Loans from '../components/bank/Loans';



const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/loans/loansBasedOnPledgedAssets', component: BasedOnThePledgedAssetsLoans, meta: {requiresAuth: true}},
  {path: '/loans/securityProvidedLoans', component: LoansBasedOnTheSecurityProvider , meta: {requiresAuth: true}},
  {path: '/loans/loansBasedOnPurpose', component: BasedOnThePurposeLoans, meta: {requiresAuth: true}},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/loans/homeLoans', component: HomeLoans , meta: {requiresAuth: true}},
  {path: '/loans/educationLoans', component: EducationLoans , meta: {requiresAuth: true}},
  {path: '/loans/personalLoans', component: PersonalLoans , meta: {requiresAuth: true}},
  {path: '/loans/vehicleLoans', component: VehicleLoans, meta: {requiresAuth: true}},
  {path: '/loans/goldLoans', component: GoldLoans , meta: {requiresAuth: true}},
  {path: '/loans/loansAgainstAssets', component: LoansAgainstAssets , meta: {requiresAuth: true}},
  {path: '/loans/securedLoans', component: SecuredLoans,  meta: {requiresAuth: true}},
  {path: '/loans/unsecuredLoans', component: UnsecuredLoans , meta: {requiresAuth: true}},
  {path: '/loans', component: Loans, meta: {requiresAuth: true}}


];

export default routes;
