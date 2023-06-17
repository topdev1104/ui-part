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
  Container,
  CardHeader,
  CardContent,
  ListItemText
} from '@mui/material';

import Button from 'src/theme/overrides/Button';
import Iconify from 'src/components/iconify/Iconify';
import { Stack } from '@mui/system';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _invoices } from '../../_mock/arrays';
// components
import { CustomAvatar } from '../../components/custom-avatar';
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import Image from '../../components/image';


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

            <Grid container xs={12} sm={8} sx={{ mb: 5 }}>
              <Grid item xs={12} sm={8} sx={{ mb: 5 }}>



                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between">
                        <CustomAvatar
                          src='/assets/images/food.png'
                        />
                        <Typography variant="subtitle2">x 1</Typography>
                        <Typography variant="subtitle2">$83.3</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          subtotal
                        </Typography>
                        <Typography variant="subtitle2">$83.3</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Taxes
                        </Typography>
                        <Typography variant="subtitle2">
                          10$
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Total
                        </Typography>
                        <Typography variant="subtitle2">
                          $93.3
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 5 }}>

                History
                <Typography variant="body2">Delivery successful</Typography>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  15 Jun 2023 1:18PM
                </Typography>
                <Typography variant="body2">Transporting to [2]</Typography>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  15 Jun 2023 1:18PM
                </Typography>
                <Typography variant="body2">Transporting to [1]</Typography>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  15 Jun 2023 1:18PM
                </Typography>
                <Typography variant="body2">The shipping unit has picked up the goods</Typography>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  15 Jun 2023 1:18PM
                </Typography>
                <Typography variant="body2">Order has been created</Typography>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  15 Jun 2023 1:18PM
                </Typography>
                <Typography variant="body2">Delivery successful</Typography>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  15 Jun 2023 1:18PM
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 5 }}>

                <Typography paragraph variant="body2" sx={{ color: 'text.disabled' }}>Order time</Typography>
                <Typography paragraph variant="overline" >15 Jun 2023 1:18PM</Typography>


                <Typography paragraph variant="body2" sx={{ color: 'text.disabled' }}>Payment time</Typography>
                <Typography paragraph variant="overline" >15 Jun 2023 1:18PM</Typography>


                <Typography paragraph variant="body2" sx={{ color: 'text.disabled' }}>Delivery time for the carrier</Typography>
                <Typography paragraph variant="overline" >15 Jun 2023 1:18PM</Typography>


                <Typography paragraph variant="body2" sx={{ color: 'text.disabled' }}>Completed time</Typography>
                <Typography paragraph variant="overline" >15 Jun 2023 1:18PM</Typography>

              </Grid>
            </Grid>
            <Grid container xs={12} sm={4} sx={{ mb: 5 }}>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Customer Info"
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Licin obrian
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" >
                        IP address 10.4.404.43
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Delivery"
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Ship by
                      </Typography>
                      <Typography variant="subtitle2">DHL</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Speedy
                      </Typography>
                      <Typography variant="subtitle2">
                        Standard
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tracking No.
                      </Typography>
                      <Typography variant="subtitle2">
                        spx45766767
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Shipping"
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Address
                      </Typography>
                      <Typography variant="subtitle2">1942 verna usnd 1383934343</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Phone Number
                      </Typography>
                      <Typography variant="subtitle2">
                        1545-33434-333
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Payment"
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Phone Number
                      </Typography>
                      <Image
                        alt="icon"
                        src='/assets/icons/payments/ic_mastercard.svg'
                        sx={{ mb: 1, maxWidth: 36 }}
                      />
                      <Typography variant="subtitle2">.... ... ...5678</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Card>
      </Container>
    </>
  );
}
