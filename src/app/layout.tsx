import { Container, Grid, Paper } from '@mui/material';
import VoiceRecorder from '@/components/VoiceRecorder';
import DiagnosisSelector from '@/components/DiagnosisSelector'
import TreatmentPlanGenerator from '@/components/TreaatmentPlanGeneartor';
import EmailForm from '@/components/EmailForm';


function MyApp() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <VoiceRecorder />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <DiagnosisSelector />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <TreatmentPlanGenerator />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <EmailForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
