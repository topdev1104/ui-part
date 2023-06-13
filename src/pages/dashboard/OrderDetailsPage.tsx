import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
// @mui

import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
  Container
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _invoices } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// sections

// ----------------------------------------------------------------------

export default function OrderDetailsPage() {
  const { themeStretch } = useSettingsContext();

  const { id } = useParams();

  const currentInvoice = _invoices.find((invoice) => invoice.id === id);
  const StyledRowResult = styled(TableRow)(({ theme }) => ({
    '& td': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }));
  return (
    <>
      <Helmet>
        <title> Invoice: View | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Order Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Order',
              href: PATH_DASHBOARD.invoice.root,
            },
            { name: `#${currentInvoice?.invoiceNumber}` },
          ]}
        />
            <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
     

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Invoice from
            </Typography>

            <Typography variant="body2"> </Typography>

            <Typography variant="body2"> </Typography>

            <Typography variant="body2">Phone:  </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Invoice to
            </Typography>

            <Typography variant="body2"> </Typography>

            <Typography variant="body2"> </Typography>

            <Typography variant="body2">Phone:</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              date create
            </Typography>

            <Typography variant="body2"> </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Due date
            </Typography>

          </Grid>
        </Grid>

        <Divider sx={{ mt: 5 }} />

        <Grid container>
          <Grid item xs={12} md={9} sx={{ py: 3 }}>
            <Typography variant="subtitle2">NOTES</Typography>

            <Typography variant="body2">
              We appreciate your business. Should you need us to add VAT or extra notes let us know!
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
            <Typography variant="subtitle2">Have a Question?</Typography>

            <Typography variant="body2">support@minimals.cc</Typography>
          </Grid>
        </Grid>
      </Card>
      </Container>
    </>
  );
}
